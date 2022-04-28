function CreateWord({ data }) {
  return (
    <form>
      <div className='input_area'>
        <label>ENG</label>
        <input type='text' placeholder='ENG' />
      </div>
      <div className='input_area'>
        <label>KOR</label>
        <input type='text' placeholder='KOR' />
      </div>
      <div className='input_area'>
        <label>Day</label>
        <select>
          <option>1</option>
        </select>
      </div>
    </form>
  );
}

export default CreateWord;
