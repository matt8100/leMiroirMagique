import os
import webapp2
import jinja2


template_dir = os.path.join(os.path.dirname(__file__), 'templates')
template_env = jinja2.Environment(autoescape=False,
                                  loader=jinja2.FileSystemLoader(template_dir))

class MainHandler(webapp2.RequestHandler):
                                  
    def get(self):
        template = template_env.get_template('index.html')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
