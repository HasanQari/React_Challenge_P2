import DataPanel from "../pages/data_panel";

function CP_stage() {
    return (
        <div class="col-8 bg-panel m-1  p-5 rounded-1 text-start" dir="ltr">

            <table>
                <tbody>
                    <tr>
                        <td>
                            <button
                                className="btn center rounded-circle w-h-80 btn-bg btn-hov mx-4 mt-5">
                                <h3 className="fs-18 mt-2 text-white">800</h3>
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn center rounded-circle w-h-80 btn-bg btn-hov mx-4 mt-5">
                                <h3 className="fs-18 mt-2 text-white">11,650</h3>
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn center rounded-circle w-h-80 btn-bg btn-hov mx-4 mt-5">
                                <h3 className="fs-18 mt-2 text-white">0</h3>
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn center rounded-circle w-h-80 btn-bg btn-hov mx-4 mt-5">
                                <h3 className="fs-18 mt-2 text-white">1,875</h3>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-center pt-2">JMR</td>
                        <td className="text-center pt-2">HRM</td>
                        <td className="text-center pt-2">ASM</td>
                        <td className="text-center pt-2">INT</td>
                    </tr>
                    <tr>
                        <td className="text-center fs-12">محطة الجمرات</td>
                        <td className="text-center fs-12">المسجد الحرام</td>
                        <td className="text-center fs-12">نقاط التجمع</td>
                        <td className="text-center fs-12">حجاج الداخل</td>
                    </tr>
                    <tr>
                        <td>
                            <button
                                className="btn center rounded-circle w-h-80 btn-bg btn-hov mx-4 mt-5">
                                <h3 className="fs-18 mt-2 text-white">1,000</h3>
                            </button>
                        </td>
                        <td>
                            <div className="dorpdown">
                                <button
                                    className="btn center rounded-circle w-h-80 btn-bg btn-hov mx-4 mt-5 "
                                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h3 className="fs-18 mt-2 text-white">43,434</h3>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark ">
                                    <li><h6 class="dropdown-header text-end ">اختر العملية</h6></li>
                                    <li><button class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#DataPanelModal">ARFMUZ</button></li>
                                    <li><button class="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#DataPanelModal">MINARF</button></li>
                                </ul>
                            </div>
                        </td>
                        <td>
                            <button
                                className="btn center rounded-circle w-h-80 btn-bg btn-hov mx-4 mt-5">
                                <h3 className="fs-18 mt-2 text-white">0</h3>
                            </button>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="text-center pt-2">MIN</td>
                        <td className="text-center pt-2">ARF</td>
                        <td className="text-center pt-2">MUZ</td>
                        <td className="text-center pt-2"></td>
                    </tr>
                    <tr>
                        <td className="text-center fs-12">مخيمات منى</td>
                        <td className="text-center fs-12">مشعر عرفات</td>
                        <td className="text-center fs-12">مشعر مزدلفة</td>
                        <td className="text-center fs-12"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            {/* popup modal */}
            <div class="modal fade" id="DataPanelModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <DataPanel />
            </div>

        </div>
    );
}

export default CP_stage;








