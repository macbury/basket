FROM ruby:2.3.1

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

ENV APP_HOME /basket

RUN mkdir -p $APP_HOME

WORKDIR /basket

RUN gem install bundler --no-ri --no-rdoc

ADD bin/setup-phantomjs $APP_HOME/bin/setup-phantomjs
RUN $APP_HOME/bin/setup-phantomjs

ADD Gemfile $APP_HOME/
ADD Gemfile.lock $APP_HOME

RUN bundle install --jobs 20

ADD . $APP_HOME
