import { appleImg, searchImg } from "../utils";
const NavBar = () => {
    return (
        <header>
            <nav>
                <img src={appleImg} alt="apple" width={14} height={18}/>

                <div>
                    {['Phones', 'Macbooks', 'Tablets'].map((nav) => (
                        <div key={nav}>
                            {nav}
                        </div>
                    ))}
                </div>

                <div>
                    <img src={searchImg} />
                </div>
            </nav>
        </header>
    )
}

export default NavBar