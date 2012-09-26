import tornado.httpserver
import tornado.options
import tornado.ioloop
import tornado.web
import random


FIELDS = [{
        "name": "Client",
        "type": "string"
    }, {
        "name": "Date",
        "type": "string"
    }, {
        "name": "Age",
        "type": "integer"
    }, {
        "name": "Age2",
        "type": "integer"
    }]


def create(t):
    if t == 'string':
        return random.choice('abcdefghilmnopqrstuvz')
    else:
        return random.randrange(0, 100)


def get_widget():

    columns = [{
        "header": f['name'],
        "dataIndex": f['name'],
        } for f in FIELDS]

    rows = [dict((f['name'], create(f['type']))
        for f in FIELDS) for _ in xrange(5)]

    return {
        "success": True,
        "metaData": {
            "fields": FIELDS,
            "columns": columns,
        },
        "rows": rows
    }


class WidgetHandler(tornado.web.RequestHandler):
    def get(self):
        self.write(get_widget())


class WidgetAddColumnHandler(tornado.web.RequestHandler):
    def post(self):
        FIELDS.append({
            "name": self.get_argument('colName'),
            "type": self.get_argument('colType'),
            })
        self.write(get_widget())


class WidgetRemoveColumnHandler(tornado.web.RequestHandler):
    def post(self):
        global FIELDS
        FIELDS = [f for f in FIELDS
                if f['name'] != self.get_argument('colName')]
        self.write(get_widget())


urls = [
    (r"/backend/widget/addColumn", WidgetAddColumnHandler),
    (r"/backend/widget/removeColumn", WidgetRemoveColumnHandler),
    (r"/backend/widget", WidgetHandler),
]
app = tornado.web.Application(urls)


if __name__ == "__main__":
    server = tornado.httpserver.HTTPServer(app)
    server.listen(8080)
    tornado.options.parse_command_line()
    tornado.ioloop.IOLoop.instance().start()
