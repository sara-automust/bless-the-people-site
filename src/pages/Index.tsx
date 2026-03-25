import Layout from "@/components/Layout";
import { Heart, BookOpen, Users, HandHeart } from "lucide-react";

const activities = [
  {
    icon: BookOpen,
    title: "הקמת כולל אברכים",
    description: "כולל תורני המאפשר לאברכים ללמוד תורה בהתמדה ובעמקות, עם מסגרת סדורה וליווי רוחני צמוד מרבנים מובילים.",
  },
  {
    icon: Users,
    title: "מערך חונכים לתלמידים",
    description: "תוכנית חונכות אישית המחברת בין תלמידים צעירים לחונכים מנוסים, לחיזוק הלימוד והצמיחה הרוחנית.",
  },
  {
    icon: HandHeart,
    title: "תמיכה לנזקקים",
    description: "סיוע כלכלי ורגשי למשפחות נזקקות, כולל חלוקת מזון, עזרה בשכר דירה ותמיכה בעתות משבר.",
  },
  {
    icon: Heart,
    title: "סיוע למשפחות ברוכות ילדים",
    description: "תמיכה מקיפה למשפחות גדולות הכוללת מענקים לחגים, ציוד לילדים, ועזרה בהוצאות חינוך.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2
            className="text-4xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
          >
            יחד נבנה קהילה של תורה וחסד
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            עמותת "לעובדי השם בארץ הקודש" פועלת לקידום לימוד התורה, חיזוק הקהילה ותמיכה במשפחות נזקקות בארץ ישראל. אנו מאמינים שכל יהודי ראוי לגדול בתורה ובמעשים טובים.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2
            className="text-3xl font-bold text-primary text-center mb-12"
            style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
          >
            תחומי הפעילות שלנו
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {activities.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-full bg-secondary p-3">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-12 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2
            className="text-2xl font-bold text-primary mb-3"
            style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
          >
            רוצים להיות שותפים?
          </h2>
          <p className="text-muted-foreground mb-4">
            לפרטים נוספים והצטרפות ניתן ליצור קשר בטלפון: <strong className="text-foreground">054-8887080</strong>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
