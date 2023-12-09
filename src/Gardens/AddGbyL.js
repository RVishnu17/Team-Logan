import './Upload.css'
export const AddGbyL = () =>
{    return (
        <>
        
        
        <div  className="formm">
        <h2>Garden Information</h2>
        <form id="gardenForm">
        <label for="location">Location: </label>
        <input type="text" id="location" name="location" required />  
        <br></br>
        <label for="vegetables">Vegetables (comma-separated):</label>
        <input type="text" id="vegetables" name="vegetables" required/>
        <br></br>
        
        <label for="fruits">Fruits (comma-separated):</label>
        <input type="text" id="fruits" name="fruits" required/>
        <br></br>
        
        <label for="contactName">Contact Person Name:</label>
        <input type="text" id="contactName" name="contactName" required/>
        <br></br>
        
        <label for="contactEmail">Contact Person Email:</label>
        <input type="email" id="contactEmail" name="contactEmail" required/>
        <br></br>
        
        <label for="imageUrl">Garden Image URL:</label>
        <input type="url" id="imageUrl" name="imageUrl" required/>
        <br></br>
        
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" required></textarea>
        <br></br>
        
        <button type="button" onclick="submitForm()">Submit</button>
        <br></br>
        
            </form>
        </div>
        </>
    
    
    
    
    );
}

