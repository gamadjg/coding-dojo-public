from flask import Flask, session

app = Flask(__name__)
app.secret_key = "Dojo sweepstakes"
DATABASE = "dojo_survey_schema"
