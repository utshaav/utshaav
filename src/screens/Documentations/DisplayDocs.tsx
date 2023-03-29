import { marked } from 'marked';
import React, { useEffect, useState } from 'react'
import './GithubMd.scss'
import './DisplayDocs.scss'



function DisplayDocs() {
    var listOfDocs = ["KnowledgeSharing.md"];
    const [selectedDoc, setSelectedDoc] = useState("");

    let handleLinkClick = (selectedDoc: string) => {
        console.log(selectedDoc);
        setSelectedDoc(selectedDoc);
        try {
            import('../../assets/Documents/' + selectedDoc)
                .then(res => {
                    fetch(res.default)
                        .then(res => res.text())
                        .then(res =>{
                            document.getElementById("Docs")!.innerHTML = marked.parse(res);
                        })
                        .catch(err => console.warn(err));
                })
                .catch(err => console.warn(err));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container'>
            {selectedDoc == "" &&
            <div className='docs_list'>
                <h3>Available Docs</h3>
                <ul>
                {listOfDocs.map(function (e) {
                    return <li><a id={e} onClick={() => handleLinkClick(e)}> {e} </a></li>
                })}
                </ul>
                
            </div>}
            {selectedDoc != "" &&
            <div className='markdown-body' id="Docs">
                
            </div>}
        </div>

    )
}

export default DisplayDocs