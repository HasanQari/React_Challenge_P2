import '../App.css';

function DataPanel() {

    // change background color
    document.body.style = 'background: #141d24';

    return (
        // in this pop-up modal display the data and reports (but it's not completed becouse no enough time)
        <div class="container modal-dialog modal-dialog-centered modal-fullscreen rounded-3" dir='rtl'>
            <div class="container modal-content bg-dark">
                {/* colse button */}
                <div class="modal-header">
                    <button type="button" class="btn-close bg-info" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                {/* show date and current process */}
                <div class="modal-body">
                    <div className='row'>

                        <div className='col'>
                            <div className='row'>
                                <div className='col text-center  rounded-3 bg-panel pt-3'>
                                    <h1 style={{ fontSize: '30px', }}>11</h1>
                                    <h4 className='fs-18'>ذي الحجة</h4>
                                </div>
                                <div className='col-7 text-end'>
                                    <div className=' mt-4 text-secondary'>
                                        <h4 className='fs-12'>تفاصيل العملية</h4>
                                    </div>
                                    <div>
                                        <h6>منى إلى عرفات</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* stastic group */}
                        <div className='col-8'>
                            <div className='row'>
                                <div className='col'>
                                    <div className='border border-danger border-5 rounded-circle w-h-80 text-center pt-4'>
                                        <h3 className='fs-18'>7,279</h3>
                                        <h6 className='fs-12'>81 فوج</h6>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='border border-5 rounded-circle w-h-80 text-center pt-4'>
                                        <h3 className='fs-18'>0</h3>
                                        <h6 className='fs-12'>0 فوج</h6>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='border border-5 rounded-circle w-h-80 text-center pt-4'>
                                        <h3 className='fs-18'>0</h3>
                                        <h6 className='fs-12'>0 فوج</h6>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='border border-5 rounded-circle w-h-80 text-center pt-4'>
                                        <h3 className='fs-18'>0</h3>
                                        <h6 className='fs-12'>0 فوج</h6>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='border border-info border-5 rounded-circle w-h-80 text-center pt-4'>
                                        <h3 className='fs-18'>7,279</h3>
                                        <h6 className='fs-12'>81 فوج</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* the icon  */}
                        <div className='col-1'>
                        <i class="bi bi-funnel pointer"></i><br />
                        <i class="bi bi-bar-chart-line pointer b-0"></i>
                        </div>

                    </div>
                    <hr />

                    <div className='row text-center'>
                        <div className='col'>
                            <h6 className='fs-12'>
                                <div className=' rounded-circle mx-2'
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        display: 'inline-block',
                                        backgroundColor: '#d040ed'
                                    }}></div>
                                أفواج متبقية</h6>
                            <table class="table table-dark table-hover fs-12">
                                <thead className='text-secondary'>
                                    <tr>
                                        <th scope="col">الفوج</th>
                                        <th scope="col">الخروج</th>
                                        <th scope="col">الوصول</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>P1-B92-32</td>
                                        <td>02:34:00</td>
                                        <td>05:23:00</td>
                                    </tr>
                                    <tr>
                                        <td>P1-B92-32</td>
                                        <td>02:34:00</td>
                                        <td>05:23:00</td>
                                    </tr>
                                    <tr>
                                        <td>P1-B92-32</td>
                                        <td>02:34:00</td>
                                        <td>05:23:00</td>
                                    </tr>
                                    <tr>
                                        <td>P1-B92-32</td>
                                        <td>02:34:00</td>
                                        <td>05:23:00</td>
                                    </tr>
                                    <tr>
                                        <td>P1-B92-32</td>
                                        <td>02:34:00</td>
                                        <td>05:23:00</td>
                                    </tr>
                                    <tr>
                                        <td>P1-B92-32</td>
                                        <td>02:34:00</td>
                                        <td>05:23:00</td>
                                    </tr>
                                    <tr>
                                        <td>P1-B92-32</td>
                                        <td>02:34:00</td>
                                        <td>05:23:00</td>
                                    </tr>
                                    <tr>
                                        <td>P1-B92-32</td>
                                        <td>02:34:00</td>
                                        <td>05:23:00</td>
                                    </tr>
                                    <tr>
                                        <td>P1-B92-32</td>
                                        <td>02:34:00</td>
                                        <td>05:23:00</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className='col border-end'>
                            <h6 className='fs-12'>
                                <div className=' rounded-circle mx-2'
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        display: 'inline-block',
                                        backgroundColor: '#0dcaf0'
                                    }}></div>
                                أفواج خرجت</h6>
                            <table class="table table-dark table-hover fs-12">
                                <thead className='text-secondary'>
                                    <tr>
                                        <th scope="col">الفوج</th>
                                        <th scope="col">المجدول</th>
                                        <th scope="col">المتحقق</th>
                                    </tr>
                                </thead>
                            </table>
                            <h6 className='text-secondary'>لايوجد افواج ليتم عرضها</h6>
                        </div>
                        <div className='col border-end'>
                            <h6 className='fs-12'>
                                <div className=' rounded-circle mx-2'
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        display: 'inline-block',
                                        backgroundColor: '#ecf00e'
                                    }}></div>
                                أفواج وصلت</h6>
                            <table class="table table-dark table-hover fs-12">
                                <thead className='text-secondary'>
                                    <tr>
                                        <th scope="col">الفوج</th>
                                        <th scope="col">المجدول</th>
                                        <th scope="col">المتحقق</th>
                                    </tr>
                                </thead>
                            </table>
                            <h6 className='text-secondary'>لايوجد افواج ليتم عرضها</h6>
                        </div>
                    </div>

                </div>
                {/* <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div> */}
            </div>
        </div>
    );
}

export default DataPanel;