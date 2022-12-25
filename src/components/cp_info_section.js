function CP_info_section() {

    return (
        <div class="col bg-panel m-1 rounded-1">
            <div id='date' className='row m-3 mb-5 text-center'>
                <div className='col mt-1'>
                    <h1 className='text-start' style={{ fontSize: '70px', }}>11</h1>
                </div>
                <div className='col-8'>
                    <div className=' mt-4'>
                        <h4>ذي الحجة</h4>
                    </div>
                    <div className=''>
                        <h6>07:33 - 07:38</h6>
                    </div>
                </div>
            </div>
            <div id='score'
                className='row'>
                <table className=''>
                    <tbody className=''>
                        <tr className=''>
                            <td className=''>
                                <h6 className='fs-12 pt-1'>حجاج الداخل</h6>
                            </td>
                            <td className='px-2 col-6'>
                                <div class="progress" style={{ height: '10px', width: '100%' }}>
                                    <div class="progress-bar bg-info" role="progressbar" aria-label="Example 1px high" style={{ width: '3%', height: '10px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                            <td className='px-2 '>
                                <h6 className='fs-12 text-end pt-1'>3%</h6>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className=''>
                                <h6 className='fs-12 pt-1'>نقاط التجمع</h6>
                            </td>
                            <td className='px-2 col-6'>
                                <div class="progress" style={{ height: '10px', width: '100%' }}>
                                    <div class="progress-bar bg-info" role="progressbar" aria-label="Example 1px high" style={{ width: '0%', height: '10px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                            <td className='px-2 '>
                                <h6 className='fs-12 text-end pt-1'>0%</h6>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className=''>
                                <h6 className='fs-12 pt-1'>المسجد الحرام</h6>
                            </td>
                            <td className='px-2 col-6'>
                                <div class="progress" style={{ height: '10px', width: '100%' }}>
                                    <div class="progress-bar bg-info" role="progressbar" aria-label="Example 1px high" style={{ width: '20%', height: '10px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                            <td className='px-2 '>
                                <h6 className='fs-12 text-end pt-1'>20%</h6>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className=''>
                                <h6 className='fs-12 pt-1'>محطة الجمرات</h6>
                            </td>
                            <td className='px-2 col-6'>
                                <div class="progress" style={{ height: '10px', width: '100%' }}>
                                    <div class="progress-bar bg-info" role="progressbar" aria-label="Example 1px high" style={{ width: '1%', height: '10px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                            <td className='px-2 '>
                                <h6 className='fs-12 text-end pt-1'>1%</h6>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className=''>
                                <h6 className='fs-12 pt-1'>مخيمات منى</h6>
                            </td>
                            <td className='px-2 col-6'>
                                <div class="progress" style={{ height: '10px', width: '100%' }}>
                                    <div class="progress-bar bg-info" role="progressbar" aria-label="Example 1px high" style={{ width: '2%', height: '10px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                            <td className='px-2 '>
                                <h6 className='fs-12 text-end pt-1'>2%</h6>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className=''>
                                <h6 className='fs-12 pt-1'>مشعر عرفات</h6>
                            </td>
                            <td className='px-2 col-6'>
                                <div class="progress" style={{ height: '10px', width: '100%' }}>
                                    <div class="progress-bar bg-info" role="progressbar" aria-label="Example 1px high" style={{ width: '74%', height: '10px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                            <td className='px-2 '>
                                <h6 className='fs-12 text-end pt-1'>74%</h6>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className=''>
                                <h6 className='fs-12 pt-1'>مشعر مزدلفة</h6>
                            </td>
                            <td className='px-2 col-6'>
                                <div class="progress" style={{ height: '10px', width: '100%' }}>
                                    <div class="progress-bar bg-info" role="progressbar" aria-label="Example 1px high" style={{ width: '0%', height: '10px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                            <td className='px-2 '>
                                <h6 className='fs-12 text-end pt-1'>0%</h6>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id='peopleNumber' className='row mb-5'>
                <div className='col mt-1 '>
                    <i className="bi bi-person m-2" style={{
                        fontSize: '40px',
                        position: 'absolute',
                    }}></i>
                </div>
                <div className='col'>
                    <div className=' mt-4'>
                        <h4 className='fs-12 text-end'>عدد الحجاج</h4>
                    </div>
                    <div className='text-end'>
                        <h5>58,571</h5>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CP_info_section;