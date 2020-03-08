from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types


def analyse(request):
    request_json = request.get_json()

    if request_json and 'text' in request_json:
        text = request_json['text']

        # Instantiates a client
        client = language.LanguageServiceClient()

        # The text to analyze
        document = types.Document(
            content=text,
            type=enums.Document.Type.PLAIN_TEXT
        )

        # Detects the sentiment of the text
        analysis = client.analyze_entity_sentiment(document=document, encoding_type='UTF32')

        return str(analysis)

    else:
        return f'Hello World!'

# {
#     "text": "There is a fire in my house please help!"
# }
