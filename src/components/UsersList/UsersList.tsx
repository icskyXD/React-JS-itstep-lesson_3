import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/usersActions";
import { setLoading, unsetLoading } from "../../reducers/loaderSlice";
import { AppDispatch, RootState } from "../../store";
import { IUser } from "../../types";

const UsersList = () => {
    const dispatch: AppDispatch = useDispatch();
    const status = useSelector<RootState, string>((state) => state.users.status);
    const users = useSelector<RootState, IUser[]>((state) => state.users.users);

    // @ts-ignore
    useEffect(() => {
      (async () => {
        await dispatch(setLoading())
        await dispatch(fetchUsers())
        await dispatch(unsetLoading())
    })();
    }, [])

    if(status === 'pending') {
        return <h1>Loading...</h1>
    } 
    
    return (
        <div>
            {users.map(item=> {return <div key={item.id}>{item.id}.{item.name}</div>})}
        </div>
    ) 
}
export default UsersList;