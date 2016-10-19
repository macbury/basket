FROM ruby:2.3.1

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

# Install phantom js for testing
ENV PHANTOM_JS phantomjs-2.1.1-linux-x86_64

RUN apt-get install -y \
  chrpath \
  libssl-dev \
  libxft-dev \
  libfreetype6 \
  libfreetype6-dev \
  libfontconfig1 \
  libfontconfig1-dev

RUN cd /tmp && \
  wget https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM_JS.tar.bz2 && \
  tar xvjf $PHANTOM_JS.tar.bz2 && \
  mv $PHANTOM_JS /usr/local/share && \
  ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin

ENV APP_HOME /basket

RUN mkdir -p $APP_HOME

WORKDIR /basket

RUN gem install bundler --no-ri --no-rdoc

ADD Gemfile $APP_HOME/
ADD Gemfile.lock $APP_HOME

ADD client/ $APP_HOME/client

RUN cd client/ && npm install
RUN bundle install --jobs 20

ADD . $APP_HOME
