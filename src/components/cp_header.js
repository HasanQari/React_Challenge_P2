import '../App.css';

function CP_header() {
    return (
        <header className='m-0 row bg-panel text-white'>
            <div className='col'>
                <ul class="nav ">
                    <li class="nav-item">
                        <p className='m-1 mt-2 align-middle'
                            style={{
                                fontSize: 12,
                            }}>
                            البيانات التشغيلية للتفويج <span className='mx-2' style={{ color: 'gray' }}> | </span> وزارة الحج والعمرة
                        </p>
                    </li>
                </ul>
            </div>
            <div className='col'>
                <ul className='nav justify-content-end' style={{
                    fontSize: 12,
                }}>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/control_panel">الاعدادات</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/control_panel">الوضع الداكن</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/control_panel">الدخول الى البوابة</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default CP_header;