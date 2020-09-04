from app import db


class Mention(db.Model):
    __tablenames__ = 'mentions'
    id = db.Column(db.Integer, primary_key=True)
    mention_id = db.Column(db.Integer, unique=True)
    sender = db.Column(db.Integer)
    created = db.Column(db.DateTime, index=True)

    def __repr__(self):
        return f"<Mention {self.id}>"


class Status(db.Model):
    __tablename__ = 'statuses'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(280), unique=True)

    def __repr__(self):
        return f"<Status {self.text}>"


class Hashtag(db.Model):
    __tablename__ = 'hashtags'
    id = db.Column(db.Integer, primary_key=True)
    hashtag = db.Column(db.String(50), unique=True)

    def __repr__(self):
        return f"<Hashtag {self.hashtag}>"


class USATrend(db.Model):
    __tablename__ = 'usa_trends'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(50), unique=True)

    def __repr__(self):
        return f"<USATrend {self.text}>"


class Follower(db.Model):
    __tablename__ = 'followers'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, unique=True)
    screen_name = db.Column(db.String(150))

    def __repr__(self):
        return f"<Follower {self.screen_name}>"


class Following(db.Model):
    __tablename__ = 'people_i_follow'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, unique=True)
    screen_name = db.Column(db.String(150))

    def __repr__(self):
        return f"<I follow {self.screen_name}>"