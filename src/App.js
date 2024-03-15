
import React, { useState } from "react";
import styled,{css} from "styled-components";
import { MdDone, MdDelete,MdAdd } from "react-icons/md";

const RootBlock = styled.div`
  background-color: #E5E1DA;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pangolin', cursive;
`
const TodoTemplateBlock=styled.div`
  background-color: #FBF9F1;
  height: 650px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TodoHeadBlock = styled.div`   
  border-radius: 15px;
  font-size: 40px;
  background-color: #92C7CF;
  padding: 20px;
  font-weight: bolder;
  color: white;
`
const TodoListTemplateBlock = styled.div`
  height: 550px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TodoListBlock = styled.div`
  display: flex;
  flex-direction: column;
`
const Remove = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;
  color: #95badf;
  visibility:hidden;
    
`

const TodoItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover{
    background-color: #E5E1DA;
    border-radius: 10px;
    ${Remove} {
      visibility: visible;
    }
  }
`

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 18px;
  border: 2px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  color:#AAD7D9;
  background-color:white;
`
//완료 : #38d9a9;

const TextBlock = styled.div`
  border-bottom: 2px dashed #AAD7D9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin: 10px;
`

const Text = styled.div`
  font-size: 21px;
  color: black;
  font-weight: bolder;
`

const CreateBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CircleButton = styled.button`
  background-color: #DAE3F3;
  width: 50px;
  height: 50px;
  font-size: 40px;
  border-radius: 50px;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover{
    background-color: #bdd1f1;
  }
  transition: 0.125s all ease-in;
  ${props => props.open?css`
    background-color: #ff6b6b;
    transform: rotate(45deg);
    &:hover {
      background: #ff8787;
     }
    `:null
  }
`;

const Input = styled.input`
  background-color: #f0eeeb;
  width: 380px;
  height: 50px;
  padding: 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  box-sizing: border-box;
  margin-left:20px;
  ${props => props.open?css`
    transition-duration: 1s;
  `:null
}
`;

const Today = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString(
    ("ko-KR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  const dayName = today.toLocaleDateString("en-EN", { weekday: "short" });
  return `${dateString} (${dayName})`;
}

function App() {

  const [open,setOpen] = useState(false)
    const onOpen = ()=>{ setOpen(!open) }

  return (
    <>
      <RootBlock>
        <TodoTemplateBlock>
          <TodoHeadBlock>
            TodoList {Today()}
          </TodoHeadBlock>
          <TodoListTemplateBlock>
            <TodoListBlock>
              <TodoItemBlock>
                <CheckCircle>
                  <MdDone/>
                </CheckCircle>
                <TextBlock>
                  <Text>Study React</Text>
                  <Remove>
                    <MdDelete />
                  </Remove>
                </TextBlock>
              </TodoItemBlock>
            </TodoListBlock>

            <CreateBlock>
              <CircleButton onClick={onOpen} open={open}><MdAdd /></CircleButton>
              
              {
                open?
                (<Input 
                  autoFocus 
                  placeholder="할 일을 입력 후, Enter 를 누르세요"
                  />)
                :null
              }
              
            </CreateBlock>

          </TodoListTemplateBlock>
        </TodoTemplateBlock>
      </RootBlock>
    </>
  );
}

export default App;
