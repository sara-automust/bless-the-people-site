import Layout from "@/components/Layout";

const DataDeletion = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl py-12 px-4">
        <h1
          className="text-3xl font-bold text-primary mb-8"
          style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
        >
          בקשה למחיקת נתונים
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground leading-relaxed">
          <p>
            עמותת "לעובדי השם בארץ הקודש" מכבדת את זכותכם לפרטיות ואת זכותכם לבקש מחיקת המידע האישי שלכם ממערכותינו.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">כיצד לבקש מחיקת נתונים?</h2>
          <p>ניתן לבקש מחיקת הנתונים האישיים שלכם באחת מהדרכים הבאות:</p>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li>שליחת בקשה בטלפון: <strong className="text-foreground">054-8887080</strong></li>
            <li>פנייה בכתב לכתובת: בן נריה ברוך 4, בני ברק</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">אילו נתונים ניתן למחוק?</h2>
          <p>ניתן לבקש מחיקה של כל המידע האישי שנאסף אודותיכם, לרבות:</p>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li>פרטי קשר (שם, טלפון, דוא"ל)</li>
            <li>היסטוריית פניות</li>
            <li>כל מידע נוסף שנמסר לנו</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">לוח זמנים</h2>
          <p>
            בקשות מחיקה יטופלו תוך 30 ימי עסקים מיום קבלת הבקשה. תקבלו אישור בדוא"ל או בטלפון לאחר השלמת המחיקה.
          </p>

          <h2 className="text-xl font-semibold text-primary mt-8">הערות</h2>
          <p>
            ייתכן שנידרש לשמור מידע מסוים על פי דרישות החוק או לצורך התנהלות תקינה של העמותה. במקרה כזה, נודיע לכם אילו נתונים נשמרים ומדוע.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DataDeletion;
