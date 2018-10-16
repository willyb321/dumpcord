import { conf } from './../config';
import cli from 'cli-ux';
import {Command, flags} from '@oclif/command'

export default class Init extends Command {
  static description = 'Initialize config'

  static examples = [
    `$ dumpcord init`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    token: flags.string({char: 't', description: 'Discord token'}),
  }

  static args = []

  async run() {
    const {args, flags} = this.parse(Init);
    let token = flags.token;
    if (!flags.token) {
      token = await cli.prompt('What is your Discord token?');
    }
    conf.set('token', token);
    console.log('Done! Run `dumpcord dump` to dump a channel');
  }
}
