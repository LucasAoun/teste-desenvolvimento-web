import React, { useState, ChangeEvent, FormEvent } from 'react'
import {Form, FormControl, Col, Button, InputGroup} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import '../styles/pages/pokemonAdd.css'

function PokemonAdd(){

    const [formData, setFormData] = useState({
        namePokemon: '',
        generation: '',
        evolutionStage: '',
        familyId: '',
        type1: '',
        type2: '',
        wheater1:'',
        wheater2: '',
        statTotal: '',
        atk: '',
        def: '',
        sta: '',
        aquireable: '',
        raidable: '',
        hatchable: '',
        shiny: '',
        cp39: '',
        cp40: ''
    })

    const [selectData, setSelectData]= useState({
        evolved: '',
        legendary: '',
        spawns: '',
        regional: '',
        nest: '',
        notGettable: '',
        futureEvolved: ''
    })

    const [inputFile, setInputFile]= useState<File[]>([])
    const [previewImages, setPreviewImages] = useState<string[]>([])

    function handleInputFile(event: ChangeEvent<HTMLInputElement>){
        if(!event.target.files){
          return
        }
        const selectedImages = Array.from(event.target.files)
        setInputFile(selectedImages)
        const selectedImagesPreview = selectedImages.map(image =>{
          return URL.createObjectURL(image)
        })
        setPreviewImages(selectedImagesPreview)
       }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }
    function handleSelectChange(event: ChangeEvent<HTMLSelectElement>){
        const{name, value} = event.target
        setSelectData({...selectData, [name]: value})
    }
    function handleSubmit(event: FormEvent){
        event.preventDefault()
        const {namePokemon,
            generation,
            evolutionStage,
            familyId,
            type1,
            type2,
            wheater1,
            wheater2,
            statTotal,
            atk,
            def,
            sta,
            aquireable,
            raidable,
            hatchable,
            shiny,
            cp39,
            cp40
    } = formData

    
    const{evolved,
    legendary,
    spawns,
    regional,
    nest,
    notGettable,
    futureEvolved
    } = selectData

    const data={
            namePokemon,
            generation,
            evolutionStage,
            familyId,
            type1,
            type2,
            wheater1,
            wheater2,
            statTotal,
            atk,
            def,
            sta,
            aquireable,
            raidable,
            hatchable,
            shiny,
            cp39,
            cp40,
            evolved,
            legendary,
            spawns,
            regional,
            nest,
            inputFile,
            notGettable,
            futureEvolved
    }
    console.log(data)
}
    return(
        <div className="page-pokemonAdd">
                <Sidebar/>
            <div className="form-container">
            <Form onSubmit={handleSubmit} id="form">
                
            <Col>
                <Form.File
              className="image"
              required
              name="image"
              label="Pokemon Photo"
              id="image"
              onChange={handleInputFile}
            />
            </Col>
               <br/>

                <Form.Row>
                    <Col xs={7}>
                    <InputGroup>
                         <FormControl
                             placeholder="Pokemon Name"
                             aria-label="namePokemon"
                             className="namePokemon"
                             id="namePokemon"
                             onChange={handleInputChange}
                                />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="Generation Pokemon"
                        id="generation"
                        className="generation"
                        onChange={handleInputChange}
                         />
                    </InputGroup>
                    </Col>
                    
                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="Evolution stage"
                        id="evolutionStage"
                        className="evolutionStage"
                        onChange={handleInputChange}
                         />
                        </InputGroup>
                    </Col>
                </Form.Row>
                <br/>

                <Form.Row>
                <Col>
                <InputGroup>
                <FormControl as="select" className="evolved" id="evolved" onChange={handleSelectChange}>
                    <option value="">Evolved?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                </Col>

                <Col>
                <InputGroup>
                <FormControl 
                        type="number" 
                        placeholder="Family ID"
                        id="familyId"
                        className="familyId"
                        onChange={handleInputChange}
                         />
                </InputGroup>        
                </Col>
                <Col>
                <Form.Control 
                        type="text" 
                        placeholder="Type 1"
                        id="type1"
                        className="type1"
                        onChange={handleInputChange}
                         />
                </Col>

                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Type 2"
                        id="type2"
                        className="type2"
                        onChange={handleInputChange} />
                </InputGroup>      
                </Col>
                </Form.Row>
                <br/>

                <Form.Row>
                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Wheater 1"
                        id="wheater1"
                        className="wheater1"
                        onChange={handleInputChange}
                         />
                </InputGroup>
                </Col>

                <Col>
                <InputGroup>
                <FormControl 
                        type="text" 
                        placeholder="Wheater 2"
                        id="wheater2"
                        className="wheater2" 
                        onChange={handleInputChange}
                        />
                </InputGroup>       
                </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="stat Total"
                        id="statTotal"
                        className="statTotal"
                        onChange={handleInputChange} />
                    </InputGroup> 
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="atk"
                        id="atk"
                        className="atk"
                        onChange={handleInputChange}
                         />
                    </InputGroup>
                    </Col>

                    <Col>

                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="def"
                        id="def"
                        className="def"
                        onChange={handleInputChange}
                         />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl 
                        type="number" 
                        placeholder="sta"
                        id="sta"
                        className="sta"
                        onChange={handleInputChange}
                         />
                    </InputGroup>
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <InputGroup>
                <FormControl as="select"  className="legendary" id="legendary" onChange={handleSelectChange}>
                    <option value="">Legendary?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="Aquireable"
                        id="aquireable"
                        className="aquireable"
                        onChange={handleInputChange}
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                <InputGroup>
                <FormControl as="select" className="spawns" id="spawns" onChange={handleSelectChange}>
                    <option value="">Spawns</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    
                    <Col>
                <InputGroup>
                <FormControl as="select" className="regional" id="regional" onChange={handleSelectChange}>
                    <option value="">Regional</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>

                    </Form.Row>
                    <br/>
                    <Form.Row>
                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="Raidable"
                        id="raidable"
                        className="raidable"
                        onChange={handleInputChange}
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="Hatchable"
                        id="hatchable"
                        className="hatchable"
                        onChange={handleInputChange}
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="Shiny"
                        id="shiny"
                        className="shiny"
                        onChange={handleInputChange}
                    />
                    </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                <FormControl as="select" className="nest" id="nest" onChange={handleSelectChange}>
                    <option value="">Nest</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>

                    <Col>
                    <InputGroup>
                <FormControl as="select" className="newPoke" id="newPoke" onChange={handleSelectChange}>
                    <option value="">New</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    </Form.Row>
                    <br/>

                <Form.Row>
                <Col>
                <InputGroup>
                <FormControl as="select" className="notGettable" id="notGettable" onChange={handleSelectChange}>
                    <option value="">Not gettable?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    <Col>
                <InputGroup>
                <FormControl as="select" className="futureEvolved" id="futureEvolved" onChange={handleSelectChange}>
                    <option value="">Future evolved?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </FormControl>
                </InputGroup>
                    </Col>
                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="CP39"
                        id="cp39"
                        className="cp39"
                        onChange={handleInputChange}
                    />
                    </InputGroup>
                    </Col>
                    <Col>
                    <InputGroup>
                    <FormControl
                        type="number"
                        placeholder="CP40"
                        id="cp40"
                        className="cp40"
                        onChange={handleInputChange}
                    />
                    </InputGroup>
                    </Col>
                </Form.Row>
                <br/>
                <Button className="buttonForm" variant="danger">Cancel</Button>
                <Button type="submit" className="buttonForm" variant="success">Save</Button>


                </Form>
                </div>
            </div>
    )
}

export default PokemonAdd