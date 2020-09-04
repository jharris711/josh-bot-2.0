from app import create_app, db
from app.models import Mention, Status


app = create_app()


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'Mention': Mention, 'Status': Status}