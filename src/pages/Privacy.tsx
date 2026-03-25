import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-3xl py-12 px-4">
        <h1
          className="text-3xl font-bold text-primary mb-8"
          style={{ fontFamily: "'Frank Ruhl Libre', serif" }}
        >
          מדיניות פרטיות
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground leading-relaxed">
          <p>עמותת "לעובדי השם בארץ הקודש" (להלן: "העמותה") מכבדת את פרטיות המשתמשים באתר ובעמוד הפייסבוק שלה. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם.</p>

          <h2 className="text-xl font-semibold text-primary mt-8">1. מידע שאנו אוספים</h2>
          <p>אנו עשויים לאסוף את סוגי המידע הבאים:</p>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li>שם מלא</li>
            <li>כתובת דוא"ל</li>
            <li>מספר טלפון</li>
            <li>מידע שנמסר בעת פנייה אלינו</li>
            <li>מידע טכני כגון כתובת IP וסוג דפדפן</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">2. שימוש במידע</h2>
          <p>המידע שנאסף משמש אותנו למטרות הבאות:</p>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li>יצירת קשר עם פונים ותורמים</li>
            <li>שליחת עדכונים על פעילות העמותה</li>
            <li>שיפור השירותים שלנו</li>
            <li>עמידה בדרישות החוק</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">3. שיתוף מידע עם צדדים שלישיים</h2>
          <p>איננו מוכרים, סוחרים או מעבירים את המידע האישי שלכם לצדדים שלישיים, למעט במקרים הבאים:</p>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li>כאשר נדרש על פי חוק</li>
            <li>לצורך הגנה על זכויות העמותה</li>
            <li>עם ספקי שירות הפועלים מטעמנו ומחויבים לשמירה על סודיות</li>
          </ul>

          <h2 className="text-xl font-semibold text-primary mt-8">4. אבטחת מידע</h2>
          <p>אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלכם מפני גישה בלתי מורשית, שימוש לרעה או חשיפה.</p>

          <h2 className="text-xl font-semibold text-primary mt-8">5. זכויות המשתמש</h2>
          <p>יש לכם את הזכות לבקש גישה, תיקון או מחיקה של המידע האישי שלכם בכל עת. ניתן לפנות אלינו בטלפון 054-8887080 או בכתובת: בן נריה ברוך 4, בני ברק.</p>

          <h2 className="text-xl font-semibold text-primary mt-8">6. שינויים במדיניות</h2>
          <p>העמותה רשאית לעדכן מדיניות פרטיות זו מעת לעת. שינויים יפורסמו בעמוד זה עם תאריך העדכון האחרון.</p>

          <p className="text-sm text-muted-foreground mt-8">עדכון אחרון: מרץ 2026</p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
