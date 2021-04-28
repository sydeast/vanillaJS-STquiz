class Delete {
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        // const resData = 'resource deleted...';
        // return resData;
    }
}

