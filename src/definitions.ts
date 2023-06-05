export interface docxreaderPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
