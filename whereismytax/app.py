from flask import Flask, make_response, redirect, render_template, request
import json

app = Flask(__name__)


@app.route('/', defaults={'pid': 'leadership_style'},  methods=['POST', 'GET'])
def index():
    return render_template()


if __name__ == '__main__':
    app.run()
