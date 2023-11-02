import style from './Header.module.css'
const Header = () => {
    return (
        <div className={style.header}>
            <a href={"/episodes"}>Rick & Morty</a>
        </div>
    );
}

export {Header};