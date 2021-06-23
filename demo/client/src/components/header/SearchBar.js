import { makeStyles,fade,InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';


const useStyle = makeStyles((theme)=>({
    search: {
        borderRadius:2,
        backgroundColor: '#fff',
        marginLeft: 0,
        width: '38%',
        marginLeft:10,
        display:'flex',
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'blue',
      },
      inputRoot: {
        fontSize:'unset',
        width:'100%'
      },
      inputInput: {
        paddingLeft: 20
      },
}))



const SearchBar = () => {
    const classes = useStyle();
    return(
        <div className={classes.search}>
            <InputBase
              placeholder="Search for products & more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
    )
}

export default SearchBar;