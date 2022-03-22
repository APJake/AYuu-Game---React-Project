import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams,Link } from 'react-router-dom'
import { getUserHistory } from '../store/actions/usersAction';
import {Container} from 'react-bootstrap';
import Loading from './Loading';

function TransactionHistory(transaction, userId) {
  let destinationUser = transaction.destinationUser;
  let message = "";
  if(destinationUser){
    message = ` from `
    if(destinationUser._id ===  userId){
      destinationUser = transaction.sourceUser;
      message = ` to `;
    }
  }
  return (
      <div className="myrow" key={transaction._id}>
          <div className="myrow-gp">
              <div className="mytext mywords">{transaction.type}
              {(message!="")?(
              <span className="mytext">{message} <Link to={`/ayuu/${destinationUser._id}`} className="mytext gati-info">{destinationUser.nickname}</Link></span>
              ):(<span></span>)}
              </div>
          </div>
          <div className={dynamicDingerClassname(transaction.amount)}>{transaction.amount}</div>
      </div>
  );
}

function Profile(user){
  return (
    <div className='myflex mycenter'>
      <div className='mycol mycenter'>
        <h4 className='mytext mytextcenter'>{user.nickname}</h4>
        <table className='myprofiletable'>
          <tbody>

          <tr>
            <td>အမည်</td>
            <td>-</td>
            <td className='mytext'>{user.name}</td>
          </tr>
          <tr>
            <td>ဒင်္ဂါး</td>
            <td>-</td>
            <td className={dynamicDingerClassname(user.dinger)}>{user.dinger}</td>
          </tr>
          </tbody>
          </table>
      </div>
    </div>
  );
}

function dynamicDingerClassname(dinger){
  return (dinger>0)?"mytext gati-success": "mytext gati-danger";
}
function Ayuu(props) {
  let {id} = useParams();

  useEffect(() => {
    props.getUserHistory(id);
  }, [id])
  
  console.log(props.history);
    return(
      <Container>
        {props.history.loading?(
          <Loading />
        ):(
          <Container>          
          {Profile(props.history.history.user)}
          <div className='gati mb-5'>
            <h6 className='mytext gati-pale mt-3'>History</h6>
          {props.history.history.transactions.map(transaction=>TransactionHistory(transaction, id))}

          </div>
          </Container>
        )}
      </Container>
    );

}


const mapStateToProps = function (state) {
  return {
      history: state.history
  };
};

export default connect(mapStateToProps, {getUserHistory})(Ayuu);
