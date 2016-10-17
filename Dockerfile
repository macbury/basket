FROM ruby:2.3.1

ENV APP_HOME /basket

RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME/

ADD Gemfile $APP_HOME/
ADD Gemfile.lock $APP_HOME

RUN gem install bundler --no-ri --no-rdoc
RUN bundle install --jobs 20

ADD . $APP_HOME
