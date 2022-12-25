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

                        </div>

                    </div>
                    <hr />

                    {/* here should display the tables and the reports !!!!! but no much time */}

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