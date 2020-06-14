import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import RepoService from "src/repo.service";
import Message from "src/db/models/message.entity";
import MessageInput from "./input/message.input";

@Resolver()
export default class MessageResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Message])
  public async getMessages(): Promise<Message[]> {
    return this.repoService.messageRepo.find();
  }

  @Query(() => Message, { nullable: true })
  public async getMessageFromUser(
    @Args("userId") userId: number
  ): Promise<Message> {
    return this.repoService.messageRepo.findOne({
      where: {
        userId,
      },
    });
  }

  @Mutation(() => Message)
  public async createMessage(
    @Args("data") input: MessageInput
  ): Promise<Message> {
    const Message = this.repoService.messageRepo.create({
      content: input.content,
    });
    return this.repoService.messageRepo.save(Message);
  }
}
