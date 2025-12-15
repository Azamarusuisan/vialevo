export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold tracking-widest mb-4">VIALEVO</h2>
                        <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                            Creating the Future with Innovation.
                            <br />
                            Beyond the boundaries of possibility.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-2 text-xs text-gray-400 font-jp">
                        <p>〒350-1138</p>
                        <p>埼玉県川越市中台元町1-24-36</p>
                        <p className="mt-4 text-gray-600">© 2025 VIALEVO Co., Ltd. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
