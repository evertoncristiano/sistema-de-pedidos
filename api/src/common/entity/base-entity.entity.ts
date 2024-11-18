import { BeforeInsert, Column, PrimaryGeneratedColumn } from "typeorm"
import { randomUUID } from "crypto";

export class BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string


    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @Column()
    deletedAt: Date


    @BeforeInsert()
    generateId() {
      if (this.id)
        return;
  
      this.id = randomUUID();
    }
}
