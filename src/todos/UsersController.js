import React from 'react';

// TODO - 2
// Import variabel users dari file users.js


const UsersController = () => {
    async () => {
        console.log(await formatUser())
        console.log(await findByName())
        console.log(await filterByMajor)
    }
    return (
        <div>
            <h3>Cek hasilnya pada konsole</h3>
        </div>
    );
}

// TODO - 3
// Buatlah function formatUser yang menampilkan seluruh nama users
// Gunakan metode async await
// Gunakan metode map untuk format user
const FormatUser = async () => {
    try {
        const formattedUsers = await Promise.all(users.map(async (user) => {
            return user.name;
        }));

        return formattedUsers;
    } catch (error) {
        console.error('Error formatting users:', error);
        return [];
    }
};



// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const FindByName = async (name) => {
    try {
        const foundUser = await users.find(async (user) => {
            return user.name === name;
        });

        return foundUser;
    } catch (error) {
        console.error('Error finding user by name:', error);
        return null;
    }
};




// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const FilterByMajor = async (major) => {
    try {
        const usersWithMajor = await Promise.all(users.filter(async (user) => {
            return user.major === major;
        }));

        return usersWithMajor;
    } catch (error) {
        console.error('Error filtering users by major:', error);
        return [];
    }
};

export default UsersController;
