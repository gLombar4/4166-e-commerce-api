import bcrypt from 'bcrypt';
import prisma from '../src/config/db';
try {
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();

    const usersData = [
        {
            email: "cloud@test.com",
            password: await bcrypt.hash('braver', 10)
        }
    ];
    const users = await Promise.all(
        usersData.map((user) => prisma.user.create({ data: user })),
    );
    
    for (const user of users) {
        await prisma.product.createMany({
            data: [
                {
                    name: "Buster Sword",
                    description: "Initial Equip",
                    price: 1.0,
                    stock: 1,
                    seller_id: 1,
                    category_id: 1
                },
            ],
        });
    }
    conosle.log("Seeded Successfully");
}
catch (error) {
    console.log("Error seeding: ", error)
}
finally {
    await prisma.$disconnect();
}