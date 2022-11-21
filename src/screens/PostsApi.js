/*import firebase from '@react-native-firebase/app'


export function addPost(post, addComplete){
    firebase.firestore()
    .collection('posts')
    .add({
        postName: post.postName,
        postDescription: post.postDescription,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        postPrice: post.postPrice
    }).then((snapshot) => snapshot.get())
    .then((postData) => addComplete(postData.data()))
    .catch((error) => console.log(error))
}

export async function getPost(postRetrieved){

    var postList = [];

    var snapshot = await firebase.firestore()
    .collection("posts")
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) => {
        postList.push(doc.data());
    });

    postRetrieved(postList);
}
*/