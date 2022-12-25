import '../App.css';
import CP_HEADER from '../components/cp_header';
import CP_INFO from '../components/cp_info_section';
import CP_STAGE from '../components/cp_stage';

function ControlPanel() {

    // change background color
    document.body.style = 'background: #141d24';

    return (
        <div>
            {/* component cp_header showing the header */}
            <CP_HEADER />

            <div class="container text-center text-white mt-2 p-0">
                <div class="row">

                    {/* component cp_info_section showing the statics part*/}
                    <CP_INFO />

                    {/* component cp_stage showing the stage setting part*/}
                    <CP_STAGE />
                </div>
            </div>
        </div>
    );
}

export default ControlPanel;