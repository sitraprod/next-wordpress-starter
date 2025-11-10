import Link from 'next/link';
import Container from 'components/Container';

const Header = () => {
  return (
    <>
      {/* شريط الأخبار العاجلة */}
      <div className="breaking-news">
        <span className="label">عاجل</span>
        <marquee behavior="scroll" direction="right" scrollamount="5">
          الحكومة تعلن عن إجراءات جديدة لدعم الاقتصاد الوطني — المنتخب المغربي يستعد لتصفيات كأس العالم — ارتفاع أسعار النفط عالميًا.
        </marquee>
      </div>

      {/* رأس الصفحة الرئيسي */}
      <header className="site-header">
        <Container>
          <div className="header-content">
             {/* الشعار */}
            <h1 className="text-center">
              <Link href="/">
                المنظار<span>24</span>
              </Link>
            </h1>
            <p className="site-description">عينك على الخبر ... أولاً بأول</p>

            {/* القائمة الرئيسية */}
            <nav>
              <ul className="nav">
                <li><Link href="/">الرئيسية</Link></li>
                <li><Link href="/category/politics">سياسة</Link></li>
                <li><Link href="/category/sports">رياضة</Link></li>
                <li><Link href="/category/economy">اقتصاد</Link></li>
                <li><Link href="/category/culture">ثقافة</Link></li>
                <li><Link href="/category/tech">تكنولوجيا</Link></li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;