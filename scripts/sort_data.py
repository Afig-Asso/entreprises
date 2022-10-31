import os
import shutil
import re

meta = {
    'filename_yaml': 'data.yaml',
    'filename_yaml_save': '.data-save.yaml'
}
root_path = os.path.join(os.path.dirname(__file__))

def extract_name(paragraph):
    split_paragraph = paragraph.split('\n')
    assert len(split_paragraph)>1
    return split_paragraph[0].replace('"','').replace(' ','')


if __name__ == "__main__":

    filename_yaml = root_path+'/../'+meta['filename_yaml']
    filename_yaml_save = root_path+'/../'+meta['filename_yaml_save']
    
    out = ''

    with open(filename_yaml,'r') as fid:
        
        paragraph = ['']

        # get all the beginning of the file
        for line in fid:
            if line.startswith('- Name:')==False:
                out += line
            else:
                #read the rest of the file
                paragraph[-1] += line
                break

        if paragraph[-1]=='':
            print('Did not find any company name in the file')
            print('Exit with error')
            exit(1)

        # Generate paragraph starting by - Name:
        for line in fid:
            if line.startswith('- Name:'):
                paragraph.append('')
                paragraph[-1] += line
            else:
                paragraph[-1] += line

        # Ensure last entity has space
        if paragraph[-1].endswith('\n')==False:
            paragraph[-1] += '\n\n'

        # extract name
        splitted_text = sorted(paragraph, key = lambda paragraph: extract_name(paragraph))
        print(f'Found {len(splitted_text)} companies \n')

        for k, paragraph in enumerate(splitted_text):
            if len(paragraph)<100:
                print("Sorting may fails to parse yaml, do not write file")
                print(paragraph)
                exit(1)
            else:
                out += paragraph

    # write results
    assert out != ''

    # save previous file
    shutil.copyfile(filename_yaml, filename_yaml_save)

    # write new file
    with open(filename_yaml, 'w') as fid:
        fid.write(out)
    
    print('Wrote sorted file in '+meta['filename_yaml'])
    print('A copy of the original file is available in '+meta['filename_yaml_save'])

