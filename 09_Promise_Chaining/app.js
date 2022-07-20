//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

// **************************************************************
// Messy code
// catch cannot not catch errors from the nested promises
// ***************************************************************
// fakeRequest('/users')
// .then((res) => {
// 	console.log(res);
// 	const id = res.data[0].id;
// 	console.log(id);
// 	fakeRequest(`/users/${id}`).then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		fakeRequest(`/users/${postId}`).then((res) => {
// 			console.log(res);
// 		})
// 	})
// })
// .catch((rej) => {
// 	console.log('Error', rej);
// })

fakeRequest('/users')
.then((res) => {
	console.log(res);
	const id = res.data[0].id;
	return fakeRequest(`/users/${id}`);
})
.then((res) => {
	console.log(res);
	const postId = res.data.topPostId;
	return fakeRequest(`/posts/${postId}`);
})
.then((res) => {
	console.log(res);
})
.catch((rej) => {
	console.log('Error', rej);
});


// ************************************************
// ATTEMPT 2 (deliberate error to illustrate CATCH)
// ************************************************
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});
