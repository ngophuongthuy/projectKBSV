export default function FilterDropdown() {
    return (
        <div>
            <div className='flex py-4'>
                <div className="flex border border-bg_border_filter rounded bg-bg_filter">
                    <div className="flex px-3 py-2 text-sm">
                        <div className='text-text_border1'>Mã chứng khoán: </div>
                        <div className="">
                            <select className="text-text_border2 bg-bg_filter font-talwin">
                                <option className=''>Tất cả</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex ml-3 border border-bg_border_filter rounded bg-bg_filter">
                    <div className="flex px-3 py-2 text-sm">
                        <div className='text-text_border1'>Lệnh: </div>
                        <div className="">
                            <select className="text-text_border2 bg-bg_filter font-talwin">
                                <option className=''>Tất cả</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex ml-3 border border-bg_border_filter rounded bg-bg_filter">
                    <div className="flex px-3 py-2 text-sm">
                        <div className='text-text_border1'>Loại lệnh: </div>
                        <div className="">
                            <select className="text-text_border2 bg-bg_filter font-talwin">
                                <option className=''>Tất cả</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex ml-3 border border-bg_border_filter rounded bg-bg_filter">
                    <div className="flex px-3 py-2 text-sm">
                        <div className='text-text_border1'>Trạng thái: </div>
                        <div className="">
                            <select className="text-text_border2 bg-bg_filter font-talwin">
                                <option className=''>Tất cả</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex ml-3 border border-bg_border_filter rounded bg-bg_filter">
                    <div className="flex px-3 py-2 text-sm  ">
                        <div className='text-text_border1'>Kênh GD: </div>
                        <div className="">
                            <select className="text-text_border2 bg-bg_filter font-talwin">
                                <option className=''>Tất cả</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="ml-auto">
                    <button className=" bg-bg_filter border border-bg_filter2 text-text_filter2 font-semibold text-sm py-2 px-3 rounded mr-5">
                        Hủy lệnh đã chọn
                    </button>
                </div>
            </div>
        </div>
    );
}
