FROM ruby:2.3.1

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

ENV APP_HOME /basket

RUN mkdir -p $APP_HOME

WORKDIR /basket

RUN npm install -g phantomjs-prebuilt
RUN gem install bundler --no-ri --no-rdoc

ADD Gemfile $APP_HOME/
ADD Gemfile.lock $APP_HOME

ADD client/ $APP_HOME/client

RUN cd client/ && npm install
RUN bundle install --jobs 20

ADD . $APP_HOME
