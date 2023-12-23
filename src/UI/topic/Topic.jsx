import cl from "./Topic.module.css"
const Topic = () => {
  return (
    <div className={cl.container}>
        <div className={cl.image_container}>
        <img className={cl.image} src="./spain_flag.png"/>

        </div>
        
        <div className={cl.text_container}>
            <h2 className={cl.title}>Title of the post</h2>
            <h4 className={cl.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nibh ex. Morbi lobortis porta quam, id tincidunt nibh fermentum a. Donec malesuada vehicula leo at consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque suscipit justo ac diam ultrices, in facilisis libero commodo. Nulla leo massa, molestie vel metus ut, efficitur pellentesque mi. Fusce nec ornare eros.Vivamus varius a nunc eu consequat. Integer sit amet interdum nisi. Mauris pellentesque diam nibh, id dapibus tellus pretium quis. Praesent quis egestas augue. Vestibulum molestie id magna ut dictum. Donec sit amet elementum arcu. In consequat leo sit amet metus tristique scelerisque. Aenean condimentum enim nulla, pellentesque rhoncus tellus consequat pulvinar. Nulla vestibulum cursus commodo. Phasellus vel tempus ex, id viverra dolor. Aliquam interdum accumsan libero, in rutrum arcu porta nec.</h4>
        </div>
    </div>
  );
};

export default Topic;
