import '../App.css';
import { FormText, Col, FormGroup, Label, Input } from 'reactstrap';
import { Button as ButBoot} from 'bootstrap'
import styled from 'styled-components'
import { Form, useLoaderData, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { updateContact } from '../contacts';
import { redirect } from 'react-router-dom';



export async function action ({ request, params }) {
    console.log(request, params, ' request params !!!!');
    let formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log(formData, updates, 'formdata and update')
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`)
}


const SButton = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: flex;
    :hover {
        color: blue;
    }
`


export const Element = () => {
    const contact = useLoaderData();
    console.log({contact}, contact.first === undefined, 'element contact');
    const navigate = useNavigate();
    const changerSize = (e) => {e.target.style.height = e.target.scrollHeight + 'px';}
    const [diag, setDiag] = useState([
        'шизофрения f20',
        'другие психотические расстройства F06.818',
    ])
    const [diagSin, setDiagsin] = useState([
        'синдром аффективно-бредовой',
        'параноидный синдром',
    ])

    return (
        <Form method="post" id="contact-form">
            <FormGroup row>
                <Col sm={8}>
                    <Input
                        id="name"
                        name="fio"
                        placeholder="Фамилия Имя Отчество"
                        type="text"
                        defaultValue={contact.fio}
                    />
                </Col>
                <Col sm={4}>
                    <Input
                        id="dateBirth"
                        name="dateBirth"
                        placeholder="Дата рождения (ДД.ММ.ГГГГ)"
                        type="date"
                        defaultValue={contact.dateBirth}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                {/* <Label sm={1}>Адрес</Label> */}
                <Col sm={7}>
                    <Input
                        label='address'
                        id="address"
                        name="encomplain"
                        title='Адрес регистрации и проживания'
                        placeholder="Адрес регистрации"
                        type="text"
                    />
                </Col>
                <Label
                    for="area"
                    sm={1}
                >Район</Label>
                <Col sm={4}>
                    <Input list="area" name="area" />  
                    <datalist id="area">
                        <option value="Приморский" />
                        <option value="Красногвардейский" />
                        <option value="Калининский" />
                        <option value="Приморский" />
                        <option value="Колпинский" />
                        <option value="Невский" />   
                    </datalist>
                </Col>
             </FormGroup>
            <FormGroup row>
                <Label
                    for="enter"
                    sm={2}
                >Поступил</Label>
                <Col sm={4}>
                    <Input 
                        id="enter"
                        name="enter"
                        title="Дата поступления (ДД.ММ.ГГГГ)"
                        type="date"
                    />
                </Col>
                <Col sm={3}>
                    <Input 
                        id="time"
                        name="time"
                        placeholder="09:00"
                        type="time"
                    />
                </Col>
                <Col sm={3}>
                    <Input
                        id="count"
                        name="count"
                        type="select"
                    >
                        <option>
                            Первично
                        </option>
                        <option>
                            Повторно
                        </option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={2}>
                    Направлен
                </Label>
                <Col sm={3}>
                    <Input
                        id="driver"
                        name="driver"
                        type="select"
                    >
                        <option>
                            ДПС
                        </option>
                        <option>
                            ПНД
                        </option>
                        <option>
                            Другое ЛПУ
                        </option>
                        <option>
                            Самостоятельно
                        </option>
                    </Input>
                </Col>
                <Label sm={3}>
                    Тип поступления
                </Label>
                <Col sm={4}>
                    <Input 
                        id="type"
                        name="type"
                        type="select"
                    >
                        <option>
                            Добровольно
                        </option>
                        <option>
                            Недобровольно
                        </option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label
                    for="date2"
                    sm={2}
                >Осмотрен</Label>
                <Col sm={3}>
                    <Input 
                        id="date2"
                        name="date2"
                        placeholder="Дата осмотра (ДД.ММ.ГГГГ)"
                        type="date"
                    />
                </Col>
                <Col sm={2}>
                    <Input 
                        id="time2"
                        name="time2"
                        placeholder="время осмотра"
                        type="time"
                    />
                </Col>
                <Label sm={2}>
                    Госпитализирован
                </Label>
                <Col sm={3}>
                    <Input 
                        id="type2"
                        name="type2"
                        type="select"
                    >
                        <option>
                            Добровольно
                        </option>
                        <option>
                            Недобровольно
                        </option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label
                    for="doc"
                    sm={1}
                >Врач</Label>
                <Col sm={3}>
                    <Input 
                        id="doc"
                        name="doc"
                        placeholder="ФИО врача"
                        type="text"
                    />
                </Col>
                <Label
                    for="zav"
                    sm={1}
                >Зав.отд.</Label>
                <Col sm={3}>
                    <Input 
                        label='zav'
                        id="zav"
                        name="zav"
                        placeholder="заведующий"
                        type="text"
                    />
                </Col>
                
            </FormGroup>
            
            <FormGroup row>
                <Label sm={1}>Жалобы</Label>
                <Col sm={5}>
                    <Input 
                        defaultValue='жалобы'
                        label='complain'
                        id="conplain"
                        name="complain"
                        placeholder="жалобы"
                        type="text"
                    />
                </Col>
                <Label sm={2}>Выписка</Label>
                <Col sm={4}>
                    <Input 
                        label='exit'
                        id="exit"
                        name="exit"
                        title='выписка'
                        placeholder="Дата выписки"
                        type="date"
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Label>
                    Анамнез жизни
                </Label>
                <Col sm={12}>
                    <textarea
                        defaultValue='no'
                        className='textarea'
                        name='anamnezLive'
                        rows={1}
                        placeholder='new text'
                        onChange={(e) => { changerSize(e) }}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Label>Анамнез болезни</Label>
                <Col sm={12}>
                    <textarea
                        className='textarea'
                        name='textarea'
                        placeholder='new text'
                        onChange={(e) => { changerSize(e) }}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Label>Анамнез жизни</Label>
                <Col sm={12}>
                    <textarea
                        className='textarea'
                        name='textarea'
                        placeholder='new text'
                        onChange={(e) => { changerSize(e) }}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Label>Анамнез болезни</Label>
                <Col sm={12}>
                    <textarea
                        className='textarea'
                        name='textarea'
                        placeholder='new text'
                        onChange={(e) => { changerSize(e) }}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Label>Страховой анамнез</Label>
                <Col sm={12}>
                    <textarea
                        className='textarea'
                        name='textarea'
                        placeholder='new text'
                        onChange={(e) => { changerSize(e) }}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Label>Эпидимиологический анамнез</Label>
                <Col sm={12}>
                    <textarea
                        className='textarea'
                        name='textarea'
                        placeholder='new text'
                        onChange={(e) => { changerSize(e) }}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Label>Диагноз</Label>
                <Col sm={12}>
                    <Input list="browsers2" name="dia" />  
                    <datalist id="browsers2">
                        {diag.map((item) => {
                            return <option value={item} key={item}/>
                        })}
                    </datalist>
                </Col>
                <Col sm={12}>
                    <Input list="browsers3" name="sind" />  
                    <datalist id="browsers3">
                        {diagSin.map((item) => {
                            return <option value={item} key={item}/>
                        })}
                    </datalist>
                </Col>
            </FormGroup>
            
            <p>
                <button type="submit">Save</button>
                <button 
                    type="button"
                    onClick={() => {
                        navigate(-1);
                        console.log(navigate)
                    }}
                >Cancel</button>
            </p>
    </Form>

    //     <div className='editigForm'>
    //         <Form method="post">
    //             <SDiv>
    //                 <Col sm={8}>
    //                     <Input
    //                         id="exampleName"
    //                         name="Name"
    //                         placeholder="Фамилия Имя Отчество"
    //                         type="text"
    //                     />
    //                 </Col>
    //                 <Col sm={4}>
    //                     <Input
    //                         id="examplePassword"
    //                         name="password"
    //                         placeholder="Дата рождения (ДД.ММ.ГГГГ)"
    //                         type="date"
    //                     />
    //                 </Col>
    //             </SDiv>
                // <FormGroup row>
                //     <Label
                //     for="exampleSelect"
                //     sm={0}
                //     ></Label>
                //     <Col sm={3}>
                //         <Input
                //             id="exampleSelect"
                //             name="select"
                //             type="select"
                //         >
                //             <option>
                //             Первично
                //             </option>
                //             <option>
                //             Повторно
                //             </option>
                //         </Input>
                //     </Col>
                //     <Col sm={3}>
                //         <Input
                //             id="exampleSelect"
                //             name="select"
                //             type="select"
                //         >
                //             <option>
                //             ДПС
                //             </option>
                //             <option>
                //             ПНД
                //             </option>
                //             <option>
                //             Другое ЛПУ
                //             </option>
                //             <option>
                //             Самостоятельно
                //             </option>
                //         </Input>
                //         </Col>
                //         <Label
                //                 for="exampleSelect"
                //                 sm={2}
                //         >Дата поступления</Label>
                //         <Col sm={2}>
                //             <Input 
                //                id="entries"
                //                name="enteries"
                //                placeholder="Дата поступления (ДД.ММ.ГГГГ)"
                //                type="date"
                //            />
                //         </Col>
                //         <Col sm={2}>
                //             <Input 
                //                id="entries"
                //                name="enteries"
                //                placeholder="09:00"
                //                type="time"
                //            />
                //         </Col>
                // </FormGroup>
                // <FormGroup row>
                //     <Label
                //         for="date"
                //         sm={2}
                //     >Дата осмотра</Label>
                //     <Col sm={3}>
                //         <Input 
                //             id="entries"
                //             name="enteries"
                //             placeholder="Дата осмотра (ДД.ММ.ГГГГ)"
                //             type="date"
                //         />
                //     </Col>
                //     <Col sm={2}>
                //         <Input 
                //             id="entries"
                //             name="enteries"
                //             placeholder="время осмотра"
                //             type="time"
                //         />
                //     </Col>
                //     <Label sm={2}>
                //     Потсупление
                //     </Label>
                //         <Col sm={2}>
                //             <Input 
                //                id="entries"
                //                name="select"
                //                type="select"
                //             >
                //                 <option>
                //                 Добровольно
                //                 </option>
                //                 <option>
                //                 Недобровольно
                //                 </option>
                //             </Input>
                //         </Col>

                // </FormGroup>
    //             <FormGroup row>
    //                 <Label
    //                 for="exampleSelectMulti"
    //                 sm={2}
    //                 >
    //                 Select Multiple
    //                 </Label>
    //                 <Col sm={10}>
    //                 <Input
    //                     id="exampleSelectMulti"
    //                     multiple
    //                     name="selectMulti"
    //                     type="select"
    //                 >
    //                     <option>
    //                     1
    //                     </option>
    //                     <option>
    //                     2
    //                     </option>
    //                     <option>
    //                     3
    //                     </option>
    //                     <option>
    //                     4
    //                     </option>
    //                     <option>
    //                     5
    //                     </option>
    //                 </Input>
    //                 </Col>
    //             </FormGroup>
    //             <FormGroup row>
    //                 <Label
    //                 for="exampleText"
    //                 sm={2}
    //                 >
    //                 Text Area
    //                 </Label>
    //                 <Col sm={10}>
    //                 <Input
    //                     id="exampleText"
    //                     name="text"
    //                     type="textarea"
    //                 />
    //                 </Col>
    //             </FormGroup>
    //             <FormGroup row>
    //                 <Label
    //                 for="exampleFile"
    //                 sm={2}
    //                 >
    //                 File
    //                 </Label>
    //                 <Col sm={10}>
    //                 <Input
    //                     id="exampleFile"
    //                     name="file"
    //                     type="file"
    //                 />
    //                 <FormText>
    //                     This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
    //                 </FormText>
    //                 </Col>
    //             </FormGroup>
    //             <FormGroup
    //                 row
    //                 tag="fieldset"
    //             >
    //                 <legend className="col-form-label col-sm-2">
    //                 Radio Buttons
    //                 </legend>
    //                 <Col sm={10}>
    //                 <FormGroup check>
    //                     <Input
    //                     name="radio2"
    //                     type="radio"
    //                     />
    //                     {' '}
    //                     <Label check>
    //                     Option one is this and that—be sure to include why it‘s great
    //                     </Label>
    //                 </FormGroup>
    //                 <FormGroup check>
    //                     <Input
    //                     name="radio2"
    //                     type="radio"
    //                     />
    //                     {' '}
    //                     <Label check>
    //                     Option two can be something else and selecting it will deselect option one
    //                     </Label>
    //                 </FormGroup>
    //                 <FormGroup
    //                     check
    //                     disabled
    //                 >
    //                     <Input
    //                     disabled
    //                     name="radio2"
    //                     type="radio"
    //                     />
    //                     {' '}
    //                     <Label check>
    //                     Option three is disabled
    //                     </Label>
    //                 </FormGroup>
    //                 </Col>
    //             </FormGroup>
    //             <FormGroup row>
    //                 <Label
    //                 for="checkbox2"
    //                 sm={2}
    //                 >
    //                 Checkbox
    //                 </Label>
    //                 <Col
    //                 sm={{
    //                     size: 10
    //                 }}
    //                 >
    //                 <FormGroup check>
    //                     <Input
    //                     id="checkbox2"
    //                     type="checkbox"
    //                     />
    //                     {' '}
    //                     <Label check>
    //                     Check me out
    //                     </Label>
    //                 </FormGroup>
    //                 </Col>
    //             </FormGroup>
    //             <FormGroup
    //                 check
    //                 row
    //             >
    //                 <Col
    //                 sm={{
    //                     offset: 2,
    //                     size: 10
    //                 }}
    //                 >
                    
    //                 <button type='submit' >styled component Summit</button>
    //                 </Col>
    //             </FormGroup>
                
    //         </Form>
    //         <div>
                
    //         </div>
    // </div>

    )
}

