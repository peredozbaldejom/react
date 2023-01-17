import '../App.css';
import { Form, FormText, Col, FormGroup, Label, Input } from 'reactstrap';
import { Button as ButBoot} from 'bootstrap'
import styled from 'styled-components'


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
    return (
        <div className='editigForm'>
            <Form>
                <FormGroup row>
                    <Col sm={8}>
                        <Input
                            id="exampleName"
                            name="Name"
                            placeholder="Фамилия Имя Отчество"
                            type="text"
                        />
                    </Col>
                    <Col sm={4}>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Дата рождения (ДД.ММ.ГГГГ)"
                            type="date"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="exampleSelect"
                    sm={0}
                    ></Label>
                    <Col sm={3}>
                        <Input
                            id="exampleSelect"
                            name="select"
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
                    <Col sm={3}>
                        <Input
                            id="exampleSelect"
                            name="select"
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
                        <Label
                                for="exampleSelect"
                                sm={2}
                        >Дата поступления</Label>
                        <Col sm={2}>
                            <Input 
                               id="entries"
                               name="enteries"
                               placeholder="Дата поступления (ДД.ММ.ГГГГ)"
                               type="date"
                           />
                        </Col>
                        <Col sm={2}>
                            <Input 
                               id="entries"
                               name="enteries"
                               placeholder="09:00"
                               type="time"
                           />
                        </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="date"
                        sm={2}
                    >Дата осмотра</Label>
                    <Col sm={3}>
                        <Input 
                            id="entries"
                            name="enteries"
                            placeholder="Дата осмотра (ДД.ММ.ГГГГ)"
                            type="date"
                        />
                    </Col>
                    <Col sm={2}>
                        <Input 
                            id="entries"
                            name="enteries"
                            placeholder="время осмотра"
                            type="time"
                        />
                    </Col>
                    <Label sm={2}>
                    Потсупление
                    </Label>
                        <Col sm={2}>
                            <Input 
                               id="entries"
                               name="select"
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
                    for="exampleSelectMulti"
                    sm={2}
                    >
                    Select Multiple
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="exampleSelectMulti"
                        multiple
                        name="selectMulti"
                        type="select"
                    >
                        <option>
                        1
                        </option>
                        <option>
                        2
                        </option>
                        <option>
                        3
                        </option>
                        <option>
                        4
                        </option>
                        <option>
                        5
                        </option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="exampleText"
                    sm={2}
                    >
                    Text Area
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="exampleFile"
                    sm={2}
                    >
                    File
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="exampleFile"
                        name="file"
                        type="file"
                    />
                    <FormText>
                        This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
                    </FormText>
                    </Col>
                </FormGroup>
                <FormGroup
                    row
                    tag="fieldset"
                >
                    <legend className="col-form-label col-sm-2">
                    Radio Buttons
                    </legend>
                    <Col sm={10}>
                    <FormGroup check>
                        <Input
                        name="radio2"
                        type="radio"
                        />
                        {' '}
                        <Label check>
                        Option one is this and that—be sure to include why it‘s great
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input
                        name="radio2"
                        type="radio"
                        />
                        {' '}
                        <Label check>
                        Option two can be something else and selecting it will deselect option one
                        </Label>
                    </FormGroup>
                    <FormGroup
                        check
                        disabled
                    >
                        <Input
                        disabled
                        name="radio2"
                        type="radio"
                        />
                        {' '}
                        <Label check>
                        Option three is disabled
                        </Label>
                    </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="checkbox2"
                    sm={2}
                    >
                    Checkbox
                    </Label>
                    <Col
                    sm={{
                        size: 10
                    }}
                    >
                    <FormGroup check>
                        <Input
                        id="checkbox2"
                        type="checkbox"
                        />
                        {' '}
                        <Label check>
                        Check me out
                        </Label>
                    </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup
                    check
                    row
                >
                    <Col
                    sm={{
                        offset: 2,
                        size: 10
                    }}
                    >
                    
                    <SButton primary>styled component Summit</SButton>
                    </Col>
                </FormGroup>
                
            </Form>
            <div>
                
            </div>
    </div>

    )
}

