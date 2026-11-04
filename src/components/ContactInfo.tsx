import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-card-gradient shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Get in Touch</CardTitle>
          <CardDescription className="text-muted-foreground">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-3 text-muted-foreground">
            <Mail size={20} className="text-primary" />
            <div>
              <p className="font-medium text-foreground">Email</p>
              <a className="text-sm hover:text-primary transition-colors" href="mailto:prathamskt@gmail.com">
                prathamskt@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <MapPin size={20} className="text-primary" />
            <div>
              <p className="font-medium text-foreground">Location</p>
              <p className="text-sm">RGIPT, Jais, India</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-muted-foreground">
            <Phone size={20} className="text-primary" />
            <div>
              <p className="font-medium text-foreground">Available</p>
              <p className="text-sm">Mon - Fri, 9AM - 6PM</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;