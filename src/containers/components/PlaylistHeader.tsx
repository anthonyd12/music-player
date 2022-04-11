import playlistCover from '../../assets/images/cover/playlist.png'

type HeaderProps = {
    title: string;
    subtitle: string;
}

const PlaylistHeader = ({title, subtitle}: HeaderProps)=> {
    return (
    <div className="header-container">
        <div className="header-background"/>
        <div className="header-content">
            <img 
            src={playlistCover} 
            alt="Capa da playlist" 
            className="header-cover"/>
        </div>
    </div>
    );
};
 export default PlaylistHeader;