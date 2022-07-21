import '../../src/styles/style.css'

export default function AdminForm(){
    return(
        <div className="adminForm">
            <div className='admin-ctn'>
                <div className='title-form'>Add Shoes</div>
                <form className='form-admin'>
                    <div className='admin-details'>
                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='Name'/>
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='Brand'/>
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='Colorway'/>
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='number' placeholder='Price'/>
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='file' placeholder='Image'/>
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='Description'/>
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='number' placeholder='Stock'/>
                        </div>
                        <div className='input-box'>
                            <input className='input-admin' type='text' placeholder='Type'/>
                        </div>
                    </div>
                    <div className='button-ctn'>
                        <input className='btn-admin' type='submit' value='send'/>
                    </div>
                </form>
            </div>
        </div>
    )
}