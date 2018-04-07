from http.server import test, SimpleHTTPRequestHandler
import sys

class CORSHandler (SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    test(HandlerClass=CORSHandler, port=int(sys.argv[1]))
