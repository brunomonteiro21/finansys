import { OnInit } from '@Angular/core';
import { element } from '@angular/core/src/render3';
import { BaseResourceModel } from '../../model/base-resources.model';
import { BaseResourceService } from '../../services/base-resource.service';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  constructor(private resourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources.sort((a, b) => b.id = a.id),
      error => alert('Erro ao carregar a lista')
    );

    console.log(this.resources);
  }

  deleteResource(resource: T) {
    const mustDelete = confirm('Deseja realmente excluir esse item?');

    if (mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(element => element != resource),
        () => alert('Erro ao tentar excluir')
      );
    }
  }

}
