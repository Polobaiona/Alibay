class UnconnectedCategories extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }




    render () => {
        return(<div>
            <ul>
                <li><a href="/show-electronics"></a></li>
                <li><a href="/show-category"></a></li>
                <li><a href="/show-electronics"></a></li>
                <li><a href="/show-electronics"></a></li>
                <li><a href="/show-electronics"></a></li>
                <li><a href="/show-electronics"></a></li>
            </ul>
        </div>)
    }
}
let Categories = connect()(UnconnectedCategories);
export default Categories;
