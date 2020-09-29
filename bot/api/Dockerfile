# Pull official base image:
FROM python:3.8.5-slim-buster

# Set working directory:
WORKDIR /usr/src/josh_bot_api

COPY ./josh_bot_2.0/api/requirements.txt ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY ./josh_bot_2.0/api ./

EXPOSE 5000

CMD ["flask", "run", "--host", "0.0.0.0"]
